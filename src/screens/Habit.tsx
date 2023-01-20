import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { View, ScrollView, Text } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { ProgressBar } from "../components/Progressbar";

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayofWeek = parsedDate.format("dddd");
  const dayofMonth = parsedDate.format("DD/MM");

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayofWeek}
        </Text>

        <Text className="text-white font-extrabold text-3xl">{dayofMonth}</Text>

        <ProgressBar progress={50} />

        <View className="mt-6">
          <CheckBox title="teste" />
          <CheckBox checked title="test eeeee" />
        </View>
      </ScrollView>
    </View>
  );
}
