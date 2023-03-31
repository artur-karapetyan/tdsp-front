export default async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (!reader.result) {
        reject("Couldn't decode");
        return;
      }
      const data = reader.result.toString();
      resolve(data);
    };

    reader.readAsDataURL(file);
  });
}
