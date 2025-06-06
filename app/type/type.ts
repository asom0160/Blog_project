export type Guestbook = {
  id: number;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
}
export type Project = {
  id: number;
  image: string;
  url: string;
  title: string;
  github: string;
}
export type Login = {
  id: number
  userId: string
  userPassWord: string
}
export type LoginCardProps = {
  login?: Login;
};