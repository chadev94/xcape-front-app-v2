import "react-notion/src/styles.css";
import { type BlockMapType, NotionRenderer } from "react-notion";
import { useEffect, useState } from "react";

type Props = {
  notionPageId?: string | null;
};

export default function NotionPage({ notionPageId }: Props) {
  const [blockMap, setBlockMap] = useState<BlockMapType | null>(null);

  useEffect(() => {
    if (!notionPageId) return;

    fetch(`https://notion-api.splitbee.io/v1/page/${notionPageId}`)
      .then((res) => res.json())
      .then((resJson) => {
        setBlockMap(resJson);
      });
  }, [notionPageId]);

  if (!blockMap) return;

  return <NotionRenderer blockMap={blockMap} fullPage={true} hideHeader={true} />;
}
