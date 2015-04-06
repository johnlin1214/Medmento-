class AttendantsController < ApplicationController
  def index
  end

  def new
  end

  def show
  end

  def create
    @demo = Demo.find(params[:demo_id])
    @attendant = @demo.attendants.create(attendant_params)
    redirect_to demo_path(@demo)
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def attendant_params
    params.require(:attendant).permit(:first_name, :last_name, :email, :npi)
  end
end
