import type { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  EventDetails: { eventId: string } | undefined;
  Sermons: undefined;
  Events: undefined;
  Give: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;
