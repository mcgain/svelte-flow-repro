class ApplicationController < ActionController::Base
  include Passwordless::ControllerHelpers

  helper_method :current_user, :user_signed_in?
  def current_user
    @current_user ||= authenticate_by_session(User)
  end

  private

  def user_signed_in?
    return true if current_user

    redirect_to root_path
  end

  def require_user!
    return if current_user

    save_passwordless_redirect_location!(User)
    redirect_to root_path, flash: { error: "You are not worthy!" }
  end
end
