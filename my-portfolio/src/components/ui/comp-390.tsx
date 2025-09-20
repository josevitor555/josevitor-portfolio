import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface ComponentProps {
  user?: {
    name: string;
    email: string;
  };
}

export default function Component({ user }: ComponentProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const userFromStorage = user || (() => {
    const userData = localStorage.getItem("user");
    return userData ? JSON.parse(userData) : null;
  })();

  const initials = userFromStorage ? getInitials(userFromStorage.name) : 'JV';

  return (
    <Avatar className="h-8 w-8 cursor-pointer hover:ring-2 hover:ring-accent-primary transition-all duration-200">
      <AvatarImage src="./avatar-80-07.jpg" alt={userFromStorage?.name || "User"} />
      <AvatarFallback className="bg-gradient-to-br from-accent-primary to-accent-secondary text-white font-semibold text-sm">
        {initials}
      </AvatarFallback>
    </Avatar>
  )
}
