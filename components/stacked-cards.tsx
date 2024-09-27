import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

interface CardProps {
  name: string
  message: string
  avatarSrc: string
  index: number
}

export const StackedCard = ({ name, message, avatarSrc, index }: CardProps) => (
  <Card
    className="absolute min-h-20 w-full border-[#FFB8A6] bg-[#FFB8A6] text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
    style={{
      transform: `translateY(${index * 18}px)`,
      zIndex: 10 - index,
      opacity: 1 - index * 0.4,
    }}
  >
    <CardContent className="p-4">
      {index === 0 && (
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={avatarSrc} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xs font-semibold">{name}</h3>
            <p className="text-xs">{message}</p>
          </div>
        </div>
      )}
    </CardContent>
  </Card>
);
