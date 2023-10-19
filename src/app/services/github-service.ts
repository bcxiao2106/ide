import { Injectable } from "@angular/core";
import { Octokit } from "@octokit/core";

@Injectable()
export class GithubService {
    private octokit: Octokit;

    constructor() {
        this.octokit = new Octokit({
            auth: 'YOUR_GITHUB_TOKEN',
        });
    }
    // Example: Fetch user information
    async getUser(username: string) {
        const { data } = await this.octokit.request('GET /users/{username}', {
            username,
        });
        return data;
    }
}