import ThemedBtn from "@/components/ThemedBtn";
import { ThemedDraw } from "@/components/ThemedDraw";
import { ThemedInput } from "@/components/ThemedInput";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useAuth } from "@/stores/auth-store";
import { useRouter } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

type Inputs = {
  username: string;
  password: string;
};

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // login("testUser", "fakeToken123");
    // router.replace("/(tabs)/home");
    console.log("data: ", data);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ThemedView className="w-full flex-1 items-center justify-end">
          <ThemedDraw>
            <ThemedText type="title" className="text-center pt-6">
              Welcome
            </ThemedText>
            <ThemedText type="subtitle" className="text-center pt-6">
              Enter your details below
            </ThemedText>
            <Controller
              render={({ field: { onChange, onBlur, value, ...rest } }) => (
                <ThemedInput
                  label="username"
                  placeholder="username"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  {...rest}
                />
              )}
              name="username"
              control={control}
              defaultValue=""
            />
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({ field: { onChange, onBlur, value, ...rest } }) => (
                <ThemedInput
                  label="password"
                  placeholder="password"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  {...rest}
                />
              )}
            />

            <ThemedBtn title="Summit" onPress={handleSubmit(onSubmit)} />
          </ThemedDraw>
        </ThemedView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
