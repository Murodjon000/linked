export type AlertProps = {
  title?: string;
  message?: string;
  variant?: string;
  isOpen?: boolean;
};

export type User = {
  firstName: string;
  lastName: string;
  role: string;
  connections: number;
  followers: number;
  image: string;
  banner: string;
};

export type Post = {
  id: number;
  user: User;
  postedDate: string;
  message: string;
  linkUrl: string;
  postImage: string;
};
