require_relative 'application_controller'

class PlayersController < ApplicationController
  def index
    @title = 'All Players'
  end
end
