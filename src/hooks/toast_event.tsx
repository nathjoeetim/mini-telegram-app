import { useToast } from "@/hooks/use-toast";

export function ShowToast(
  type: "error" | "unableToLoad" | "success" | "invalidLink"
) {
  const { toast } = useToast();

  if (type === "error") {
    return toast({
      variant: "destructive",
      title: "Error",
      description: "Uh oh! Something went wrong.",
    });
  } else if (type === "unableToLoad") {
    return toast({
      variant: "destructive",
      title: "Unable to Load",
      description: "The content couldn't be loaded. Please try again later.",
    });
  } else if (type === "success") {
    return toast({
      title: "Success",
      description: "Your request was successful!",
    });
  } else if (type === "invalidLink") {
    return toast({
      variant: "destructive",
      title: "Invalid Link",
      description: "The link provided is invalid. Please check and try again.",
    });
  }
  return;
}
