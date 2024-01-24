import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
type User = {
	avatar_url: string;
	full_name: string;
};

export async function UserAvatar() {
	const supabase = createServerComponentClient({ cookies });
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (!session) {
		return null;
	}
	const user = session?.user.user_metadata || {
		user_metadata: { avatar_url: "", full_name: "" },
	};
    user as User
	return (
		<Avatar>
			<AvatarImage src={user?.avatar_url} alt={user?.full_name} />
			<AvatarFallback>{user?.full_name}</AvatarFallback>
		</Avatar>
	);
}
