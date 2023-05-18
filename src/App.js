import React, {useState} from 'react';
import moment from "moment";
import "moment/locale/ru";




function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

const withDateTimePretty = (Component) => {
  const modifDateTime = (props) => {
    const date = moment(props.date, "YYYYMMDDhhmm").fromNow();
    return <Component url={props.url} date={date} />;
  }
  return modifDateTime;
}

function Video(props) {
  return (
    <div className="video">
      <iframe
        title="Video title"
        src={props.url}
      ></iframe>
      <DateTime date={props.date} />
    </div>
  );
}

const EnchantDateVideo = withDateTimePretty(Video);

function VideoList(props) {
    return props.list.map(item => <EnchantDateVideo url={item.url} date={item.date} />);
}



export default function App() {
  const initialState =  [
      {
        url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-05-10 13:24:00'
      },
      {
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-03-03 12:10:00'
      },
      {
        url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2023-05-017 23:16:00'
      },
      {
        url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-01-03 12:10:00'
      },
      {
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-01-01 16:17:00'
      },
      {
        url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2017-12-02 05:24:00'
      },
    ];

    // eslint-disable-next-line
    const [list, setList] = useState(initialState);

    return (
        <VideoList list={list} />
    );
}