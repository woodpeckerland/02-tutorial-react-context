import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserInfo } from "./user-info";
import { UserProfileLoader } from "./user-profile-loader";
import { useAuth } from "@/contexts/auth-provider";

export function UserProfile() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <UserProfileLoader />;
  }

  if (!user) {
    return (
      <Card className="mx-auto max-w-md">
        <CardContent>
          <p className="text-muted-foreground text-center">
            No user data available
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <UserInfo user={user} />
      </CardContent>
    </Card>
  );
}
