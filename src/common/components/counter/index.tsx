import React from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch } from "src/store/hooks";
import { RootState } from "src/store";
import { decrement, increment } from "src/store/slices/counterSlice";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increase" onPress={() => dispatch(increment())} />
      <Button title="Decrease" onPress={() => dispatch(decrement())} />
    </View>
  );
};
