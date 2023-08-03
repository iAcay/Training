require 'erb'

class App
  def call(env)
    headers = { 
      'Content-Type' => 'text/html'
     }
    
    title = get_title(env)
    erb = ERB.new(html_template)
    response_html = erb.result(binding)

    [200, headers, [response_html]]
  end

  def get_title(env)
    query = env['QUERY_STRING']
    values = query.split('=')
    values[1]
  end

  def html_template
    File.read 'views/index.html.erb'
  end
end
