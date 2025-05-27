class SharedDomainsController < ApplicationController
    # before_action :set_task, only: [:show, :edit, :update, :destroy]
    def index
        @domain = SharedDomain.all
        render json: @domain
    end

    def show
        @domain = SharedDomain.find(params[:id])
        render json: @domain
    end

    def new
        @domain = SharedDomain.new
    end

    def create
        @domain = SharedDomain.new(params)
        if @domain.save
            redirect_to @domain, notice: 'Domain was successfully created.'
        else
            render :new
        end
    end

    def edit
    end

    def update
        if @task.update(task_params)
            redirect_to @task, notice: 'Task was successfully updated.'
        else
            render :edit
        end
    end

    def destroy
        @task.destroy
        redirect_to tasks_url, notice: 'Task was successfully destroyed.'
    end

    private
    def set_task
        @task = Task.find(params[:id])
    end

    def task_params
        params.require(:task).permit(:title, :description)
    end
end
