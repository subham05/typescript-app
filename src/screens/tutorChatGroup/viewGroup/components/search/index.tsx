import React from "react";
import { TextInput, TextStyle, ViewStyle } from "react-native";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
interface SearchInputProps {
  search: string;
  onSearchChange: (text: string) => void;
  styles?: {
    searchBar: ViewStyle;
    inputStyle: TextStyle;
  };
}
const Search: React.FC<SearchInputProps> = ({ search, onSearchChange }) => {
  const { styles, theme } = useStyles({});
  const handleSearchChange = (text: string) => {
    onSearchChange(text); // Pass the updated search value to the parent component
  };
  return (
    <Box style={styles.searchBar}>
      <TextInput
        value={search}
        onChangeText={handleSearchChange}
        style={styles.inputStyle}
        placeholder="Search"
        placeholderTextColor={
          theme.palette.text.Tertiary_disaibled_searchbar_other
        }
      />
    </Box>
  );
};

export default Search;
