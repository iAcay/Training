require 'sinatra'

get '/' do
  erb :index
end

post '/subscribe' do
  @name = params['name']

  response.headers['Content-Type'] = 'text/vnd.turbo-stream.html'
  
  erb :subscribe
end
