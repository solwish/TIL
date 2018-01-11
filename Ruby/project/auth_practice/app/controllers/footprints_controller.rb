class FootprintsController < ApplicationController
  before_action :set_footprint, only: [:show, :edit, :update, :destroy]
  load_and_authorize_resource
  
  # GET /footprints
  # GET /footprints.json
  def index
    @footprints = Footprint.all
  end

  # GET /footprints/1
  # GET /footprints/1.json
  def show
  end

  # GET /footprints/new
  def new
    @footprint = Footprint.new
  end

  # GET /footprints/1/edit
  def edit
  end

  # POST /footprints
  # POST /footprints.json
  def create
    @footprint = current_user.footprints.new(footprint_params)

    respond_to do |format|
      if @footprint.save
        format.html { redirect_to @footprint, notice: 'Footprint was successfully created.' }
        format.json { render :show, status: :created, location: @footprint }
      else
        format.html { render :new }
        format.json { render json: @footprint.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /footprints/1
  # PATCH/PUT /footprints/1.json
  def update
    respond_to do |format|
      if @footprint.update(footprint_params)
        format.html { redirect_to @footprint, notice: 'Footprint was successfully updated.' }
        format.json { render :show, status: :ok, location: @footprint }
      else
        format.html { render :edit }
        format.json { render json: @footprint.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /footprints/1
  # DELETE /footprints/1.json
  def destroy
    @footprint.destroy
    respond_to do |format|
      format.html { redirect_to footprints_url, notice: 'Footprint was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_footprint
      @footprint = Footprint.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def footprint_params
      params.require(:footprint).permit(:title, :content, :user_id)
    end
end
