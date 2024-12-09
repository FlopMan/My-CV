function resetKeysInObject<T extends object>(inputObject: T): T {
  // Đệ quy để xử lý từng object và kiểm tra các key
  const processObject = (obj: any): any => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (Array.isArray(obj[key])) {
          // Nếu là mảng, chỉ giữ lại phần tử đầu tiên
          if (obj[key].length > 0) {
            const firstElement = obj[key][0];
            if (typeof firstElement === "object" && firstElement !== null) {
              // Nếu phần tử đầu tiên là object và có "type" === "array", tiếp tục xử lý
              if (firstElement.type === "array") {
                obj[key] = [processObject(firstElement)];
              } else {
                // Nếu "type" !== "array", đặt "value" thành chuỗi rỗng
                firstElement.value = "";
                obj[key] = [firstElement];
              }
            } else {
              // Nếu phần tử đầu tiên không phải là object, giữ nguyên
              obj[key] = [firstElement];
            }
          } else {
            // Nếu mảng rỗng, giữ nguyên
            obj[key] = [];
          }
        } else if (typeof obj[key] === "object" && obj[key] !== null) {
          // Đệ quy tiếp tục với các object con
          processObject(obj[key]);
        } else if (key === "value" || key === "color") {
          // Đặt giá trị của key "value" hoặc "color" thành chuỗi rỗng
          obj[key] = "";
        }
      }
    }
    return obj;
  };

  // Gọi hàm xử lý đệ quy trên object đầu vào
  return processObject(inputObject);
}

function deepClone(obj: any) {
  if (typeof obj !== "object" || !obj) {
    return {};
  }
  return JSON.parse(JSON.stringify(obj));
}

export enum KEY_DEFAULT {
  HOME_PAGE = "HOME_PAGE",
  ABOUT_ME = "ABOUT_ME",
  PROJECT_LIST = "PROJECT_LIST",
}

function handleGenerateDataBeforeUpdate(data: any, dataInit: any) {
  if (typeof data !== "object" || !dataInit) return;
  const initObj: any = {
    ID: dataInit.ID,
    TITLE: dataInit.TITLE,
    HOME_PAGE: {},
    ABOUT_ME: {},
    PROJECT_LIST: {},
    TEMPLATE_ID: dataInit.TEMPLATE.ID,
  };
  Object.keys(data).forEach((key: any) => {
    if (data[key]?.parent === KEY_DEFAULT.HOME_PAGE) {
      initObj[KEY_DEFAULT.HOME_PAGE][key] = { ...data[key] };
    }
    if (data[key]?.parent === KEY_DEFAULT.ABOUT_ME) {
      initObj[KEY_DEFAULT.ABOUT_ME][key] = { ...data[key] };
    }
    if (data[key]?.parent === KEY_DEFAULT.PROJECT_LIST) {
      initObj[KEY_DEFAULT.PROJECT_LIST][key] = { ...data[key] };
    }
    // switch (data[key]?.parent) {
    //   case KEY_DEFAULT.HOME_PAGE:
    //     initObj[KEY_DEFAULT.HOME_PAGE][key] = { ...data[key] };
    //     break;
    //   case KEY_DEFAULT.ABOUT_ME:
    //     initObj[key] = { ...data[key] };
    //     break;
    //   case KEY_DEFAULT.PROJECT_LIST:
    //     initObj[key] = { ...data[key] };
    //     break;
    //   default:
    //     break;
    // }
  });
  return initObj;
}

export { resetKeysInObject, deepClone, handleGenerateDataBeforeUpdate };
