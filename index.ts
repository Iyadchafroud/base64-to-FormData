  const blobToFile = (blob: any, fileName: string) => {
      return new File([blob], fileName, {
          lastModified: new Date().getTime(),
          type: blob.type,
      });
  };
  function dataURItoBlob(dataURI: any) {
      var binary = atob(dataURI.split(",")[1]);
      var array = [];
      for (var i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], { type: "image/jpeg" });
  }

  const TEST_IMG_BASE64 =
      "data:image/png;base64,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\r\nkRKU6v4BSKJETcfTDCAAAAAASUVORK5CYII=";

  const ii = dataURItoBlob(TEST_IMG_BASE64);
  const iii = blobToFile(ii, "fff");
  var file = new File([iii], "file_name", {
      lastModified: 1534584790000,
      type: iii.type,
  });
  var formDat = new FormData();
  formDat.append("imgCollection", file);
  console.log(file);
