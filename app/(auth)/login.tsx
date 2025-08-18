import ThemedBtn from "@/components/ThemedBtn";
import { ThemedDraw } from "@/components/ThemedDraw";
import { ThemedInput } from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/stores/auth-store";
import { useRouter } from "expo-router";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login("testUser", "fakeToken123");
    router.replace("/(tabs)/home");
  };

  return (
    <ThemedView className="flex-1 items-center justify-end">
      {/* <TouchableOpacity onPress={handleLogin}> */}
      <ThemedDraw>
        <ThemedText type="title" className="text-center pt-6">
          Welcome
        </ThemedText>
        <ThemedText type="subtitle" className="text-center pt-6">
          Enter your details below
        </ThemedText>

        <ThemedInput label="username" placeholder="username" />
        <ThemedInput label="password" placeholder="password" secureTextEntry />
        <ThemedBtn title="Summit" className="" />
      </ThemedDraw>
      {/* </TouchableOpacity> */}
    </ThemedView>
  );
}
