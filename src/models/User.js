class User {
    constructor(userData) {
        Object.assign(this, userData || {});
        if (!this.groups) {
          this.groups = [];
        }
    }
    includesAny = (targetGroups) => !Array.isArray(this.groups) ? false : this.groups.some( inGroup => targetGroups.includes(inGroup));
    isStandardUser = () => this.includesAny([ "CONTRIBUTOR", "EDITOR", "ADMINISTRATOR" ]);
    canDownloadAssets = () => this.includesAny([ "DOWNLOADER", "CONTRIBUTOR", "EDITOR", "ADMINISTRATOR" ]);
    canDeleteAssets = () => this.includesAny([ "ADMINISTRATOR" ]);
    needsSelect = () => this.includesAny([ "DOWNLOADER", "CONTRIBUTOR", "EDITOR", "ADMINISTRATOR" ]);
}

export default User;
