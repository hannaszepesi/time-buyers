
package com.codecool.timebuyers.service;

import com.codecool.timebuyers.dao.UserStorageRepository;
import com.codecool.timebuyers.model.Task;
import com.codecool.timebuyers.model.UserProfile;
import com.codecool.timebuyers.model.UserStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Component
public class UserStorageService {
    @Autowired
    UserStorageRepository userStorageRepository;

    public UserProfile getUserByEmail(String email){
        return userStorageRepository.findByEmail(email);
    }

    public UserProfile getUserByUsername(String username){
        return userStorageRepository.findByUserName(username);
    }

    public List<UserProfile> getAllUser(){
        return userStorageRepository.findAll();
    }
    public void addUser(UserProfile newUserProfile) {
        userStorageRepository.save(newUserProfile);
    }
    public void deleteUser(String userName){
        userStorageRepository.delete(userStorageRepository.findByUserName(userName));
    }
//    public void updateUserByUserName(String selectedUserName,
//                                 String updatedPassword,
//                                 String updatedPhoneNumber,
//                                 String updatedEmail,
//                                 String updatedTown,
//                                 UserStatus updatedUserStatus,
//                                 List<Task> updatedTaskToNeed,
//                                 List<Task> updatedTaskToTake){
//        for (UserProfile user : users) {
//            if (user.getUserName().equals(selectedUserName)){
//                user.setPassword(updatedPassword);
//                user.setPhoneNumber(updatedPhoneNumber);
//                user.setEmail(updatedEmail);
//                user.setTown(updatedTown);
//                user.setUserStatus(updatedUserStatus);
//                user.setTaskToNeed(updatedTaskToNeed);
//                user.setTaskToTake(updatedTaskToTake);
//            }
//        }
//    }
    public void updateUserByUserName(String username, UserProfile userProfile){
        if (userStorageRepository.findByUserName(username) != null){
            userProfile.setUserName(username);
            userStorageRepository.save(userProfile);
        }
    }

    public List<UserProfile> getBuyers() {
        List<UserProfile> buyers = userStorageRepository.findAllByUserStatus(UserStatus.BUYER);
        List<UserProfile> both = userStorageRepository.findAllByUserStatus(UserStatus.BOTH);
        return Stream.concat(buyers.stream(), both.stream())
                .collect(Collectors.toList());
    }

    public List<UserProfile> getTaskers() {
        List<UserProfile> takers = userStorageRepository.findAllByUserStatus(UserStatus.TASKER);
        List<UserProfile> both = userStorageRepository.findAllByUserStatus(UserStatus.BOTH);
        return Stream.concat(takers.stream(), both.stream())
                .collect(Collectors.toList());
    }

    public List<UserProfile> getTaskersByTaskToTake(String task){
        List<UserProfile> usersByTaskToTake = userStorageRepository.usersByTask(task);
        System.out.println(usersByTaskToTake);
        return userStorageRepository.usersByTask(task);
    }

    public List<UserProfile> getUsersByPaymentMethod(String task, String userStatus) {
        List<UserProfile> usersByTask = getTaskersByTaskToTake(task);
        UserStatus status = UserStatus.valueOf(userStatus);
        return usersByTask.stream().filter(userProfile -> userProfile.getUserStatus() == status)
                .collect(Collectors.toList());
    }

}