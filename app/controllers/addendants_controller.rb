class AddendantsController < ApplicationController
  def index
  end

  def new
  end

  def show
  end

  def create
    @demo = Demo.find(params[:demo_id])
    # @attendant = Demo.attendants.new
    @attendant = Demo.attendants.create(attendant_params)
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
    params.require(:demo).permit(:first_name, :last_name, :email, :npi)
  end
end
