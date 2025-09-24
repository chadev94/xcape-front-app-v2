import { useThemeList } from "../../../../hooks/useThemeList.ts";
import RoomsThemeList from "../../../../modules/components/merchant/rooms/RoomsThemeList.tsx";

const RoomsPage = () => {
  const { xFilerThemeList, crimeSceneThemeList } = useThemeList();

  return (
    <div>
      {xFilerThemeList.length > 0 && <RoomsThemeList themeList={xFilerThemeList} isCrimeScene={false} />}
      {crimeSceneThemeList.length > 0 && <RoomsThemeList themeList={crimeSceneThemeList} isCrimeScene={true} />}
    </div>
  );
};

export default RoomsPage;
