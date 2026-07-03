import { PasswordService } from "./password.service";

async function run() {
    const password = "SRJ@2026";

    const hash = await PasswordService.hash(password);

    console.log("Hash:", hash);

    const valid = await PasswordService.verify(password, hash);

    console.log("Password Valid:", valid);
}

run();