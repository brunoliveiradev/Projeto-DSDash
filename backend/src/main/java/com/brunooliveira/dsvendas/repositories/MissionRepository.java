package com.brunooliveira.dsvendas.repositories;

import com.brunooliveira.dsvendas.entities.Mission;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MissionRepository extends JpaRepository <Mission, Long> {
}
