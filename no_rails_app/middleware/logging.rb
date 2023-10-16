require 'logger'

class Logging
  attr_reader :logger
  
  def initialize(app)
    @app = app
    @logger = Logger.new('log/development.log')
  end

  def call(env)
    logger.info "#{env['REQUEST_METHOD']}: #{env['REQUEST_PATH']}"
    @app.call(env)
  rescue => e
    logger.add(Logger::ERROR, 'Something went wrong', e)
    
    [200, { 'Content-Type' => 'text/html' }, ["Error: #{e.message}"]]
  end
end
