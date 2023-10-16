class PlayersController < ApplicationController
  def index
    @title = 'All Players'
    @player = Player.new('Kyrie Irving', 'Dallas Mavericks')
  end
end
