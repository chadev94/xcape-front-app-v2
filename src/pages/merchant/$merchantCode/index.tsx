import ThemeList from "../../../modules/components/merchant/ThemeList.tsx";
import { useThemeList } from "../../../hooks/useThemeList.ts";

const Index = () => {
  const { xFilerThemeList, crimeSceneThemeList } = useThemeList();
  console.log(xFilerThemeList);

  console.log("asdfasdfsadfsadf");

  return (
    <div>
      {xFilerThemeList.length > 0 && <ThemeList themeList={xFilerThemeList} isCrimeScene={false} />}
      {crimeSceneThemeList.length > 0 && <ThemeList themeList={crimeSceneThemeList} isCrimeScene={true} />}
    </div>
  );
};

export default Index;
