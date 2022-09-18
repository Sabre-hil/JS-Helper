import React, { useEffect, useState } from 'react';
import { ScrollView, useWindowDimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import RenderHtml from 'react-native-render-html';

// const source = {
//   html: `<pre style='height: 10em; background-color: rgba(255, 255, 128, .5);'>
// <code>
//  Что такое DOM?
//  --
//  '
//  ;
//  ;
//  -
//  f
//  f
//  f
//  f
//  f
// </code>
// </pre>`,
// };
function Qestion({ currentQestionId }) {
  const { qestionCategory } = useSelector((state) => state);
  const { width, height } = useWindowDimensions();
  const [first, setfirst] = useState({ html: '' });
  useEffect(() => {
    const gg = async () => {
      const responce = await fetch('https://js-helper.herokuapp.com/catque', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ path: `${qestionCategory[currentQestionId]?.question}` }),
      });
      if (responce.ok) {
        const data = await responce.json();
        setfirst({ html: `${data}` });
      }
      // .then((res) => res.json())
      // .then((data) => setfirst({ html: `${data}` }));
    };
    gg();
  }, [currentQestionId]);
  return (
    <View
      style={{
        flex: 2,
        // height:444
      }}
    >
      {/* <ScrollView> */}
      <RenderHtml
        contentWidth={width}
        source={first}
      />
      {/* </ScrollView> */}
    </View>
  );
}

export default Qestion;
