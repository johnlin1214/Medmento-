class DemosController < ApplicationController

  def index
    @demos = Demo.all.order('created_at DESC')
  end

  def show
    @demo = Demo.find(params[:id])
    @attendants = @demo.attendants.order('created_at DESC')
  end

  def create
    @demo = Demo.new(demo_params)
    if @demo.save
      redirect_to action: "index"
    else
       render 'new'
    end
  end

  def edit
    @demo = Demo.find(params[:id])
  end

  def update
    @demo = Demo.find(params[:id])
    if @demo.update(demo_params)
      redirect_to @demo
    else
      render 'edit'
    end
  end

  def destroy
    @demo = Demo.find(params[:id])
    @demo.destroy

    redirect_to demos_path
  end

  private

  def demo_params
    params.require(:demo).permit(:title)
  end
end
