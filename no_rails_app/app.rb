require 'logger'
require_relative './config/routes'
require 'zeitwerk'

class App
  attr_reader :logger

  def initialize
    @logger = Logger.new('log/development.log')
    loader = Zeitwerk::Loader.new
    loader.push_dir('models')
    loader.push_dir('controllers')
    loader.setup
  end

  def call(env)
    logger.info "#{env['REQUEST_METHOD']}: #{env['REQUEST_PATH']}"
    
    headers = { 'Content-Type' => 'text/html' }
    
    response_html = router.build_response(env)

    [200, headers, [response_html]]
  rescue => e
    logger.add(Logger::ERROR, 'Something went wrong', e)
  
    [400, headers, ["Error: #{e.message}"]]
  end

  private

  def router
    Router.instance
  end
end
