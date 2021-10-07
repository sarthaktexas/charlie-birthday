import Message from "../components/message";
import fetcher from "../lib/fetcher";
import useSWR from "swr";

export default function Home() {
  const messages = useSWR('/api/getmessages', fetcher).data;
  return (
    <>
      <h3 class="text-center text-gray-500 text-base mb-4">
        <b>Today</b> 12:00 AM
      </h3>
      {messages?.map(props => (
        <Message {...props} />
      ))}
    </>
  );
}
