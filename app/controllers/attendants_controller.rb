class AttendantsController < ApplicationController

  def create
    @demo = Demo.find(params[:demo_id])
    @attendant = @demo.attendants.create(attendant_params)
    redirect_to demo_path(@demo)
  end

  private

  def attendant_params
    params.require(:attendant).permit(:first_name, :last_name, :email, :npi)
  end
end
