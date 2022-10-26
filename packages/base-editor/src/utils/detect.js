let osInfo = {
  name: undefined,
};

export function os() {
  if (osInfo.name === undefined) {
    const platform = navigator.userAgentData.platform.toLowerCase();
    if (platform.indexOf("win") != -1) osInfo.name = "win";
    else if (platform.indexOf("mac") != -1) osInfo.name = "mac";
    else if (platform.indexOf("x11") != -1) osInfo.name = "linux";
    else osInfo.name = "";
  }

  return osInfo.name;
}
