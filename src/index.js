import { uploadRemoteWithConfig } from '@infinity-cli/ipublish';
const core = require('@actions/core');

async function run() {
  try {
    const ip = core.getInput('server-ip');
    const user = core.getInput('server-user');
    const password = core.getInput('server-password');
    const remotePath = core.getInput('remote-path');
    const files = core.getInput('files');
    const cmd = core.getInput('cmd') || undefined;
    const jumpIp = core.getInput('jump-ip') || undefined;
    const jumpUser = core.getInput('jump-user') || undefined;
    const jumpPassword = core.getInput('jump-password') || undefined;

    if (!ip || !user || !password || !remotePath || !files) {
      core.setFailed('缺少必要的输入参数。');
      return false;
    }
    await uploadRemoteWithConfig({
      ip,
      user,
      password,
      from: files.split(','),
      to: remotePath,
      cmd,
      jumpIp,
      jumpUser,
      jumpPassword,
    });
  } catch (error) {
    console.error(error);
    core.setFailed(`部署失败: ${error.message}`);
    process.exit(1);
  }
}

run();
