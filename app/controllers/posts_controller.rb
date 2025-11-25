class PostsController < ApplicationController
  before_action :authenticate_user!, except: [ :index, :show ]

  def index
    @posts = Post.all.order(posted_at: :desc)
    @pagy, @posts = pagy(@posts)
  end

  def show
    @post = Post.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    redirect_to root_path, alert: "Post not found."
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post, notice: "Post was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to @post, notice: "Post was successfully updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to posts_url, notice: "Post was successfully destroyed."
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :cover_image, :posted_at)
  end
end
