package com.kendev.omniseam;

import static org.assertj.core.api.Assertions.assertThat;
import com.kendev.omniseam.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;
import com.kendev.omniseam.model.User;
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class UserRepositoryTest {

    @Autowired
    private UserRepository repo;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testCreateUser(){
        User user = new User();
        user.setEmail("Omniseam@omniseam.com");
        user.setUsername("Omniseam");
        user.setFirstName("Omni");
        user.setLastName("Seam");
        user.setPassword("password");

        User savedUser = repo.save(user);

        User existUser = entityManager.find(User.class, savedUser.getId());

        assertThat(existUser.getUsername()).isEqualTo(user.getUsername());
    }
}
