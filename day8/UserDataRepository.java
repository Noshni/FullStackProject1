package com.nextax.nextax.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nextax.nextax.model.UserData;

@Repository
public interface UserDataRepository extends JpaRepository<UserData, Long> {
}