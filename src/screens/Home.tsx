import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { DAY_SIZE, HabitDay } from "../components/HabitDay";
import { Header } from "../components/Header";
import { generateDateFromYearBeginning } from "../utils/generate-dates-from-year-beginning";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const weekDaysEn = ["S", "M", "T", "W", "T", "F", "S"];
const datesFromYearStart = generateDateFromYearBeginning();

const minimumSummaryDatesSize = 18 * 7; //18 Semanas
const amountOfDaysToFill = minimumSummaryDatesSize - datesFromYearStart.length;

export function Home() {
  return (
    <View className="flex-1 bg-background  px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekday, index) => {
          return (
            <Text
              key={index}
              className="text-zinc-400 text-xl font-bold text-center mx-1 "
              style={{ width: DAY_SIZE }}
            >
              {weekday}
            </Text>
          );
        })}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {datesFromYearStart.map((date, index) => {
            return <HabitDay key={index} />;
          })}

          {amountOfDaysToFill > 0 &&
            Array.from({ length: amountOfDaysToFill }).map((_, index) => {
              return (
                <View
                  key={index}
                  className="bg-zinc-900 rounded-lg  border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                ></View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
}
