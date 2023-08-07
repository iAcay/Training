require_relative '../router'

Router.draw do
  get('/') { 'No Rails APP ' }
  get('/players') { 'All Players' }
  get('/players/1') do |env|
    puts "Path: #{env['REQUEST_PATH']}"
    'First Player'
  end
end
