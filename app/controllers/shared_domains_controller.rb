class SharedDomainsController < ApplicationController
    before_action :set_domain, only: [:show, :edit, :update, :destroy]

    def index
        @domain = SharedDomain.all
        render json: @domain
    end

    def show
        render json: @domain
    end

    def new
    end

    def create
        @domain = SharedDomain.new(domain_params)

        if @domain.save
            render json: @domain, status: :created, location: @domain
        else
            render :new
        end
    end

    def edit
    end

    def update
        if @domain.update(domain_params)
            render json: @domain, status: :ok
        else
            render :edit
        end
    end

    def destroy
        @domain.destroy
        redirect_to tasks_url, notice: 'Domain was successfully destroyed.'
    end

    private
    def set_domain
        @domain = SharedDomain.find(params[:id])
    end

    def domain_params
        params.permit(:name, :owner)
    end
end
