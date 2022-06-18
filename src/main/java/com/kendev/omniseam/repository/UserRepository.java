package com.kendev.omniseam.repository;

import com.kendev.omniseam.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
