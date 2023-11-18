class GamesController < ApplicationController
  before_action :require_user!, except: :admin

  def admin
    render "admin", layout: false
  end
end
