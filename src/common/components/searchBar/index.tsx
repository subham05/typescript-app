import { IconView } from "@common/components/Icon";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  TextInput,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
interface SearchInputProps {
  search: string;
  onSearchChange: (text: string) => void;
  styles?: {
    searchBar: ViewStyle;
    inputStyle: TextStyle;
  };
  autoFocus?: boolean;
  RenderRightContainer?: React.FC;
}
const Search: React.FC<SearchInputProps> = ({
  search,
  onSearchChange,
  autoFocus = false,
  RenderRightContainer,
}) => {
  const { t } = useTranslation();
  const inputRef = useRef<TextInput>(null);
  const { styles, theme } = useStyles({});
  const handleSearchChange = (text: string) => {
    onSearchChange(text); // Pass the updated search value to the parent component
  };

  const handleClearSearch = () => {
    onSearchChange(""); // Pass an empty string to the parent component when clearing
  };

  useEffect(() => {
    if (autoFocus) {
      setTimeout(() => {
        inputRef?.current?.focus(); // Focus on the input element
      }, 100);
    }
  }, [autoFocus]);
  return (
    <Box ph={18} pb={12}>
      <Box ph={12} style={styles.searchBar}>
        <HStack style={styles.left}>
          <IconView name="search" size={16} />
          <TextInput
            ref={inputRef}
            value={search}
            onChangeText={handleSearchChange}
            style={styles.inputStyle}
            selectionColor={theme.palette.decorative.primary_indigo}
            placeholder={t("common:search")}
            placeholderTextColor={
              theme.palette.text.Tertiary_disaibled_searchbar_other
            }
          />
        </HStack>

        {search !== "" && (
          <TouchableOpacity onPress={handleClearSearch}>
            <IconView name="remove" size={16} />
          </TouchableOpacity>
        )}
        {RenderRightContainer && <RenderRightContainer />}
      </Box>
    </Box>
  );
};

export default Search;
