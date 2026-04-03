package com.kazurite.exp9.Service;

import com.kazurite.exp9.Entity.UserEntity;
import com.kazurite.exp9.Entity.UserPrincipal;
import com.kazurite.exp9.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyUserDetailService implements UserDetailsService {
    private final UserRepository repository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Username not found"));

        return new UserPrincipal(user);
    }
}
