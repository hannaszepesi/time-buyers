package com.codecool.timebuyers.model;

public enum ApplicationUserPermission {
    FILTER_TASK("filter_task"),
    ABOUT_US("about_us");

    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
