export default function Message({ name, message, link }) {
  return (
    <div>
      <div class="flex flex-row items-end">
        <img class="w-7 h-7 rounded-full mr-4 mb-2 z-10" src={link} />
        <div>
          <span class="text-gray-500 text-sm ml-5">{name}</span>
          <p class="receive">{message}</p>
        </div>
      </div>
    </div>
  );
}
